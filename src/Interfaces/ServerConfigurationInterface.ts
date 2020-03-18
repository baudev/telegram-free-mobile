export interface ServerConfigurationInterface {
    /**
     * Public domain of the server
     */
    http_domain: string,
    /**
     * Port on the server from which the images will be accessible
     */
    files_server_port: number,
    /**
     * If the HTTPS must be enabled or not
     */
    enable_https: boolean,
    ssl: {
        /**
         * Absolute path of the private key
         */
        privateKey: string,
        /**
         * Absolute path of the certificate
         */
        certificate: string
    }
}