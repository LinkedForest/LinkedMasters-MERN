import Authentication from '../../Models/Authentication/AuthenticationModels';

// Login
export const Login = async (Request, Response) => {
    Response.status(200).json({
        message: "User Is Found"
    });
}

// Registration
export const Registration = async (Request, Response) => {
    const { first_name, last_name, birthdate, title, company, email, password, image } = Request.body;
    const NewUser = new Authentication({ first_name, last_name, birthdate, title, company, email, password, image });
    const SaveNewUser = await NewUser.save();

    Response.status(201).json({
        data: SaveNewUser,
        message: "New User Has Been Created"
    });
}