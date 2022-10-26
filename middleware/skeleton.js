export default function ({ store }) {
    if (!process.server) {
        store.commit('ui/changeSkeletonLoading', {
            skeletonLoading: true
        })
    }
}