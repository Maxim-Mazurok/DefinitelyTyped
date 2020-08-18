/* This is stub file for gapi.client.oslogin definition tests */
/* IMPORTANT.
* This file was automatically generated by https://github.com/Maxim-Mazurok/google-api-typings-generator. Please do not edit it manually.
* In case of any problems please post issue to https://github.com/Maxim-Mazurok/google-api-typings-generator
**/
gapi.load('client', () => {
    /** now we can use gapi.client */
    gapi.client.load('oslogin', 'v1', () => {
        /** now we can use gapi.client.oslogin */

        /** don't forget to authenticate your client before sending any request to resources: */
        /** declare client_id registered in Google Developers Console */
        const client_id = '<<PUT YOUR CLIENT ID HERE>>';
        const scope = [
            /** View and manage your data across Google Cloud Platform services */
            'https://www.googleapis.com/auth/cloud-platform',
            /** View and manage your Google Compute Engine resources */
            'https://www.googleapis.com/auth/compute',
        ];
        const immediate = false;
        gapi.auth.authorize({ client_id, scope, immediate }, authResult => {
            if (authResult && !authResult.error) {
                /** handle successful authorization */
                run();
            } else {
                /** handle authorization error */
            }
        });
    });

    async function run() {
        /** Retrieves the profile information used for logging in to a virtual machine on Google Compute Engine. */
        await gapi.client.oslogin.users.getLoginProfile({
            name: "Test string",
            projectId: "Test string",
            systemId: "Test string",
        });
        /** Deletes a POSIX account. */
        await gapi.client.oslogin.users.projects.delete({
            name: "Test string",
        });
        /** Deletes an SSH public key. */
        await gapi.client.oslogin.users.sshPublicKeys.delete({
            name: "Test string",
        });
        /** Retrieves an SSH public key. */
        await gapi.client.oslogin.users.sshPublicKeys.get({
            name: "Test string",
        });
        /** Updates an SSH public key and returns the profile information. This method supports patch semantics. */
        await gapi.client.oslogin.users.sshPublicKeys.patch({
            name: "Test string",
            updateMask: "Test string",
        }, {
            expirationTimeUsec: "Test string",
            fingerprint: "Test string",
            key: "Test string",
            name: "Test string",
        });
        /** Adds an SSH public key and returns the profile information. Default POSIX account information is set when no username and UID exist as part of the login profile. */
        await gapi.client.oslogin.users.importSshPublicKey({
            parent: "Test string",
            projectId: "Test string",
        }, {
            expirationTimeUsec: "Test string",
            fingerprint: "Test string",
            key: "Test string",
            name: "Test string",
        });
        /** Deletes a POSIX account. */
        await gapi.client.oslogin.users.projects.delete({
            name: "Test string",
        });
        /** Deletes an SSH public key. */
        await gapi.client.oslogin.users.sshPublicKeys.delete({
            name: "Test string",
        });
        /** Retrieves an SSH public key. */
        await gapi.client.oslogin.users.sshPublicKeys.get({
            name: "Test string",
        });
        /** Updates an SSH public key and returns the profile information. This method supports patch semantics. */
        await gapi.client.oslogin.users.sshPublicKeys.patch({
            name: "Test string",
            updateMask: "Test string",
        }, {
            expirationTimeUsec: "Test string",
            fingerprint: "Test string",
            key: "Test string",
            name: "Test string",
        });
    }
});
