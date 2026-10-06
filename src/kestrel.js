const SITE_ID = 'www'
const VISIT_ENDPOINT = 'https://kestrel.crzliang.cn/v1/visit'
const READ_ENDPOINT = 'https://kestrel.crzliang.cn/v1/track'
const VISITOR_KEY = 'kestrel_visitor_id'

let inFlight = null

function randomVisitorId() {
    if (window.crypto && typeof window.crypto.randomUUID === 'function') {
        return window.crypto.randomUUID().replace(/-/g, '')
    }
    let id = ''
    const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
    for (let i = 0; i < 32; i += 1) {
        id += chars.charAt(Math.floor(Math.random() * chars.length))
    }
    return id
}

function visitorId() {
    try {
        const stored = window.localStorage.getItem(VISITOR_KEY)
        if (stored) return stored
    } catch {
        // localStorage can be unavailable in strict privacy modes.
    }
    const id = randomVisitorId()
    try {
        window.localStorage.setItem(VISITOR_KEY, id)
    } catch {
        // Keep the page-scoped id when storage is blocked.
    }
    return id
}

function countsUrl(endpoint, path) {
    const url = new URL(endpoint)
    url.searchParams.set('siteId', SITE_ID)
    url.searchParams.set('path', path)
    return url
}

async function load() {
    const path = window.location.pathname + window.location.search
    try {
        const visit = countsUrl(VISIT_ENDPOINT, path)
        visit.searchParams.set('visitorId', visitorId())
        const response = await fetch(visit, { method: 'POST', credentials: 'omit' })
        if (response.ok) return await response.json()
    } catch {
        // Fall back to the read-only endpoint when the visit request fails.
    }

    try {
        const response = await fetch(countsUrl(READ_ENDPOINT, path), {
            method: 'GET',
            credentials: 'omit',
        })
        if (response.ok) return await response.json()
    } catch {
        // The footer stays on the placeholder when the API is unreachable.
    }
    return null
}

export function fetchKestrelCounts() {
    if (!inFlight) inFlight = load()
    return inFlight
}
