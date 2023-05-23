import { init } from 'next-firebase-auth'
import { firebaseConfig } from '@/firebase/initApp'
const initAuth = () => {
    init({
        debug: true,
        authPageURL: '/auth', //redirect when not logged in
        appPageURL: '/',//redirect when logged in
        loginAPIEndpoint: '/api/login',
        logoutAPIEndpoint: '/api/logout',
        firebaseAdminInitConfig: {
            credential: {
                projectId: firebaseConfig.projectId,
                clientEmail: 'firebase-adminsdk-xyh1o@next-256a6.iam.gserviceaccount.com',
                // The private key must not be accessible on the client side.
                privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/gm, "\n"),
            },
            databaseURL: 'https://my-example-app.firebaseio.com',
        },
        firebaseClientInitConfig: {
            apiKey: firebaseConfig.apiKey, // required
            authDomain: firebaseConfig.authDomain,
            projectId: firebaseConfig.projectId,
        },
        cookies: {
            name: 'ExampleApp', // required
            // Keys are required unless you set `signed` to `false`.
            // The keys cannot be accessible on the client side.
            keys: [
                process.env.COOKIE_SECRET_CURRENT,
                process.env.COOKIE_SECRET_PREVIOUS,
            ],
            httpOnly: true,
            maxAge: 12 * 60 * 60 * 24 * 1000, // twelve days
            overwrite: true,
            path: '/',
            sameSite: 'strict',
            secure: true, // set this to false in local (non-HTTPS) development
            signed: true,
        },
    })
}

export default initAuth