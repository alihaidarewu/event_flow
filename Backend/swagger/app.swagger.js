/**
 * @openapi
 * /:
 *   get:
 *     summary: 
 *     description: Returns a confirmation message indicating the API server is up and running.
 *     tags:
 *       - Home Page
 *     responses:
 *       200:
 *         description: Home page retrieved successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: "This is HOME page"
 */