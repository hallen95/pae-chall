export default function ({ $axios }, inject) {
    // Create a custom axios instance
    const api = $axios.create({
        headers: {
            'Content-Type': 'application/json',
            common: {
                Accept: 'text/plain, */*',
                
            }
        }
    })

    // Set baseURL to something different
    api.setBaseURL('https://pae-vercel-server-zs17.vercel.app/api')

    // Inject to context as $api
    inject('api', api)
}