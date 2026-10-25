/**
 * @openapi
 * /events/draft-events:
 *   get:
 *     summary: Retrieve all draft events
 *     description: Fetches a list of all events that currently have a status of "DRAFT".
 *     tags:
 *       - Events
 *     responses:
 *       200:
 *         description: Draft events retrieved successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: string
 *                         example: "c2b3a4d5-e6f7-8a9b-0c1d-2e3f4a5b6c7d"
 *                       title:
 *                         type: string
 *                         example: "Annual Tech Hackathon"
 *                       description:
 *                         type: string
 *                         nullable: true
 *                         example: "24-hour coding challenge for university students."
 *                       date:
 *                         type: string
 *                         format: date-time
 *                         example: "2026-11-15T00:00:00.000Z"
 *                       time:
 *                         type: string
 *                         example: "10:00 AM"
 *                       venue:
 *                         type: string
 *                         example: "Main Auditorium, Block C"
 *                       registrationFee:
 *                         type: number
 *                         example: 15.00
 *                       bannerImage:
 *                         type: string
 *                         nullable: true
 *                         example: "https://res.cloudinary.com/demo/image/upload/sample.jpg"
 *                       registrationDeadline:
 *                         type: string
 *                         format: date-time
 *                         example: "2026-11-10T23:59:59.000Z"
 *                       capacity:
 *                         type: integer
 *                         example: 200
 *                       status:
 *                         type: string
 *                         example: "DRAFT"
 *                       clubId:
 *                         type: string
 *                         example: "8f4167b8-8ff4-4604-b5b1-c70728fb4c7c"
 *                       createdAt:
 *                         type: string
 *                         format: date-time
 *                         example: "2026-10-07T19:21:00.000Z"
 *                       updatedAt:
 *                         type: string
 *                         format: date-time
 *                         example: "2026-10-07T19:21:00.000Z"
 *       400:
 *         description: Failed to retrieve draft events
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 message:
 *                   type: string
 *                   example: "Find error to get draft events"
 *                 error:
 *                   type: string
 *                   example: "Error message details"
 */




/**
 * @openapi
 * /events/published-events:
 *   get:
 *     summary: Retrieve published events
 *     description: Fetches a list of all events with status set to "PUBLISHED".
 *     tags:
 *       - Events
 *     responses:
 *       200:
 *         description: Published events retrieved successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Event'
 *       400:
 *         description: Error retrieving published events.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */



/**
 * @openapi
 * /events/cancelled-events:
 *   get:
 *     summary: Retrieve cancelled events
 *     description: Fetches a list of all events with status set to "CANCELLED".
 *     tags:
 *       - Events
 *     responses:
 *       200:
 *         description: Cancelled events retrieved successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Event'
 *       400:
 *         description: Error retrieving cancelled events.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */



/**
 * @openapi
 * /events/completed-events:
 *   get:
 *     summary: Retrieve completed events
 *     description: Fetches a list of all events with status set to "COMPLETED".
 *     tags:
 *       - Events
 *     responses:
 *       200:
 *         description: Completed events retrieved successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Event'
 *       400:
 *         description: Error retrieving completed events.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */













