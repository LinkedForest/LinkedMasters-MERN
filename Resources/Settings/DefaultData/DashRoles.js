import DashRoles from '../../Models/DashRoles/DashRolesModels';

const DefaultDashRoles = async () => {
    try {
        const DashRolesCount = await DashRoles.estimatedDocumentCount();
        if (DashRolesCount > 0) return;

        const DefaultDashRolesData = await Promise.all([
            new DashRoles({role: 'User'}).save(),
            new DashRoles({role: 'Admin'}).save(),
            new DashRoles({role: 'Editor'}).save(),
            new DashRoles({role: 'Moderator'}).save(),
            new DashRoles({role: 'Advertiser'}).save(),
            new DashRoles({role: 'Analyst'}).save()
        ]);

    } catch (Error) {
        console.log(Error);
    }
}

export default DefaultDashRoles;