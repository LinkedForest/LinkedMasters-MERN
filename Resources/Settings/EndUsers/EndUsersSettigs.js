import EndUsersPermissions from '../../Models/Permissions/EndUsers/EndUsersPermissions';

const EndUsersSettings = async () => {
    try {
        const EndUsersCount = await EndUsersPermissions.estimatedDocumentCount();
        if (EndUsersCount > 0) return;

        const EndUsersPermissionsValues = await Promise.all([
            new EndUsersPermissions({permission: 'User'}).save(),
            new EndUsersPermissions({permission: 'Admin'}).save(),
            new EndUsersPermissions({permission: 'Moderator'}).save()
        ]);
    } catch (Error) {
        console.log(Error);
    }
}

export default EndUsersSettings;