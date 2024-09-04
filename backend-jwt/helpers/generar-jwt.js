import jwt from 'jsonwebtoken';
import { SECRET_KEY } from '../config/config.js';

export default ( userId ) => {
    console.log(userId);
    
    return new Promise( ( resolve, reject ) => {

        const payload = { userId };
        jwt.sign( payload, SECRET_KEY, {
            expiresIn: '5h'
        }, ( error, token ) => {
            if ( error ) {
                console.log( error );
                reject( 'No se pudo generar el token' );
            } else {
                resolve( token );
            }
        } );
});
}