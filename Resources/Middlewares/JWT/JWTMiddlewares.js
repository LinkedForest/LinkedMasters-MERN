export const VerifyToken = async (Request, Response, NextFunction) => {
    const Token =  Request.headers["authorization"].split("Bearer ");
    console.log(Token);
    NextFunction();
}