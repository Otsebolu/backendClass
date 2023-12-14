export const loggingMiddleware = (req, res, next) => { 
    console.log("This is the LOGIN URL"); 
    console.log(req.url) 
    next(); 
}