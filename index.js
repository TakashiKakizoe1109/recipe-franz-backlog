module.exports = Franz => class Backlog extends Franz {
    overrideUserAgent() {
        const useragent = window.navigator.userAgent;
        const parts = useragent.split('(KHTML, like Gecko)');
        return parts.join('(KHTML, like Gecko) backlog/0.0.250').replace('Electron', 'Backlog').replace('Franz', 'Backlog');
    }
};