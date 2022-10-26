export const state = () => ({
    skeletonLoading: false,
})

export const mutations = {
    changeSkeletonLoading(state, payload) {
        state.skeletonLoading = payload.skeletonLoading;
    }
}