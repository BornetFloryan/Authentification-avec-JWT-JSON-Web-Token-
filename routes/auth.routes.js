const { verifySignUp } = require('../middleware');
const controller = require('../controllers/auth.controller');

module.exports = function(app) {
    /** Swagger Initialization - START */
    const swaggerJsdoc = require('swagger-jsdoc');
    const swaggerUi = require('swagger-ui-express');
    const swaggerSpec = swaggerJsdoc({
        swaggerDefinition: {
            openapi: "3.0.2",
            info: {
                title: "TP EXPRESS JWT",
                version: "1.0.0",
                description: "API documentation",
                servers: [`http://localhost:${process.env.PORT || 3000}/`],
            },
            components: {
                securitySchemes: {
                    jwt: {
                        type: "http",
                        scheme: "bearer",
                        in: "header",
                    },
                }
            },
            security: [{
                jwt: []
            }],
        },
        apis: ["server.js", "./routes/*.js"],
    });
    app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
    /** Swagger Initialization - END */

    app.use(function(req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
        );
        next();
    });

    app.post(
        "/auth/signup",
        [
            verifySignUp.checkDuplicateUsername,
        ],
        controller.signup
    );
    /**
     * @swagger
     * /auth/signup:
     *   post:
     *      description: Used to signup user
     *      tags:
     *          - users
     *      requestBody:
     *          required: true
     *          content:
     *             application/json:
     *                schema:
     *                    properties:
     *                        firstName:
     *                          type: string
     *                          minLength: 1
     *                          maxLength: 50
     *                          example: firstname
     *                        lastName:
     *                          type: string
     *                          minLength: 1
     *                          maxLength: 50
     *                          example: lastname
     *                        emailId:
     *                          type: string
     *                          minLength: 1
     *                          maxLength: 50
     *                          example: test@something.com
     *                        password:
     *                          type: string
     *                          minLength: 4
     *                          maxLength: 50
     *                          example: abcd
     *      security:
     *	       - jwt: []
     *      responses:
     *          '200':
     *              description: Resource added successfully
     *          '500':
     *              description: Internal server error
     *          '400':
     *              description: Bad request
     */

    app.post("/auth/signin", controller.signin);
    /**
     * @swagger
     * /auth/signin:
     *   post:
     *      description: Used to sign in user
     *      tags:
     *          - users
     *      requestBody:
     *          required: true
     *          content:
     *             application/json:
     *                schema:
     *                    type: object
     *                    properties:
     *                        emailId:
     *                          type: string
     *                          minLength: 1
     *                          maxLength: 50
     *                          example: test@something.com
     *                        password:
     *                          type: string
     *                          minLength: 4
     *                          maxLength: 50
     *                          example: abcd
     *      security:
     *	       - jwt: []
     *      responses:
     *          '200':
     *              description: Resource added successfully
     *          '500':
     *              description: Internal server error
     *          '400':
     *              description: Bad request
     */

    app.post("/auth/refreshtoken", controller.refreshToken);
    /**
     * @swagger
     * /auth/refreshtoken:
     *   post:
     *      description: Used to refresh token
     *      tags:
     *          - users
     *      requestBody:
     *          required: true
     *          content:
     *             application/json:
     *                schema:
     *                    type: object
     *                    properties:
     *                        refreshToken:
     *                          type: string
     *                          minLength: 1
     *                          maxLength: 100
     *      security:
     *	       - jwt: []
     *      responses:
     *          '200':
     *              description: Resource added successfully
     *          '500':
     *              description: Internal server error
     *          '400':
     *              description: Bad request
     */
};
