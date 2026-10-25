/**
 * @openapi
 * /events/create-event:
 *   post:
 *     summary: Create a new event
 *     description: Allows an admin to create a new event for a specific club with optional banner image upload.
 *     tags:
 *       - Admin
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - clubId
 *             properties:
 *               title:
 *                 type: string
 *                 description: Title of the event
 *                 example: "Annual Tech Hackathon"
 *               description:
 *                 type: string
 *                 description: Detailed description of the event
 *                 example: "24-hour coding challenge for university students."
 *               date:
 *                 type: string
 *                 format: date
 *                 description: Date of the event (YYYY-MM-DD)
 *                 example: "2026-11-15"
 *               time:
 *                 type: string
 *                 description: Event start time
 *                 example: "10:00 AM"
 *               venue:
 *                 type: string
 *                 description: Location/venue of the event
 *                 example: "Main Auditorium, Block C"
 *               registrationFee:
 *                 type: number
 *                 description: Fee required to register for the event
 *                 example: 15.00
 *               registrationDeadline:
 *                 type: string
 *                 format: date-time
 *                 description: Registration deadline date/time
 *                 example: "2026-11-10T23:59:59.000Z"
 *               capacity:
 *                 type: integer
 *                 description: Maximum number of participants
 *                 example: 200
 *               clubId:
 *                 type: string
 *                 format: uuid
 *                 description: Unique ID of the associated club
 *                 example: "a8b3c1d2-3e4f-5a6b-7c8d-9e0f1a2b3c4d"
 *               bannerImage:
 *                 type: string
 *                 format: binary
 *                 description: Event banner image file
 *     responses:
 *       201:
 *         description: Event created successfully
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
 *                   example: "New event created successfully"
 *                 data:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: string
 *                       format: uuid
 *                       example: "f47ac10b-58cc-4372-a567-0e02b2c3d4e5"
 *                     title:
 *                       type: string
 *                       example: "Annual Tech Hackathon"
 *                     description:
 *                       type: string
 *                       nullable: true
 *                       example: "24-hour coding challenge for university students."
 *                     date:
 *                       type: string
 *                       example: "2026-11-15"
 *                     time:
 *                       type: string
 *                       example: "10:00 AM"
 *                     venue:
 *                       type: string
 *                       example: "Main Auditorium, Block C"
 *                     registrationFee:
 *                       type: number
 *                       example: 15.00
 *                     bannerImage:
 *                       type: string
 *                       nullable: true
 *                       example: "uploads/bannerImage-16987654321.png"
 *                     registrationDeadline:
 *                       type: string
 *                       example: "2026-11-10T23:59:59.000Z"
 *                     capacity:
 *                       type: integer
 *                       example: 200
 *                     status:
 *                       type: string
 *                       example: "UPCOMING"
 *                     clubId:
 *                       type: string
 *                       format: uuid
 *                       example: "a8b3c1d2-3e4f-5a6b-7c8d-9e0f1a2b3c4d"
 *                     createdAt:
 *                       type: string
 *                       format: date-time
 *                       example: "2026-10-07T19:21:00.000Z"
 *                     updatedAt:
 *                       type: string
 *                       format: date-time
 *                       example: "2026-10-07T19:21:00.000Z"
 *       400:
 *         description: Bad Request / Failed to create event
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
 *                   example: "Find error to create event"
 *                 error:
 *                   type: string
 *                   example: "Foreign key constraint failed on the field: clubId"
 */




/**
 * @openapi
 * /events/all-events:
 *   get:
 *     summary: Retrieve all events
 *     description: Fetches a list of all existing events along with their details from the database.
 *     tags:
 *       - Admin
 *     responses:
 *       200:
 *         description: List of events retrieved successfully.
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
 *         description: Failed to retrieve events
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
 *                   example: "Find error to get events"
 *                 error:
 *                   type: string
 *                   example: "Database connection failure"
 */



/**
 * @openapi
 * /events/single-event:
 *   get:
 *     summary: Retrieve a single event by ID
 *     description: Fetches details for a specific event using a query parameter (`eventId`).
 *     tags:
 *       - Admin
 *     parameters:
 *       - in: query
 *         name: eventId
 *         required: true
 *         schema:
 *           type: string
 *         description: Unique ID of the event to retrieve
 *         example: "c2b3a4d5-e6f7-8a9b-0c1d-2e3f4a5b6c7d"
 *     responses:
 *       200:
 *         description: Event details retrieved successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 data:
 *                   type: object
 *                   nullable: true
 *                   properties:
 *                     id:
 *                       type: string
 *                       example: "c2b3a4d5-e6f7-8a9b-0c1d-2e3f4a5b6c7d"
 *                     title:
 *                       type: string
 *                       example: "Annual Tech Hackathon"
 *                     description:
 *                       type: string
 *                       nullable: true
 *                       example: "24-hour coding challenge for university students."
 *                     date:
 *                       type: string
 *                       format: date-time
 *                       example: "2026-11-15T00:00:00.000Z"
 *                     time:
 *                       type: string
 *                       example: "10:00 AM"
 *                     venue:
 *                       type: string
 *                       example: "Main Auditorium, Block C"
 *                     registrationFee:
 *                       type: number
 *                       example: 15.00
 *                     bannerImage:
 *                       type: string
 *                       nullable: true
 *                       example: "https://res.cloudinary.com/demo/image/upload/sample.jpg"
 *                     registrationDeadline:
 *                       type: string
 *                       format: date-time
 *                       example: "2026-11-10T23:59:59.000Z"
 *                     capacity:
 *                       type: integer
 *                       example: 200
 *                     status:
 *                       type: string
 *                       example: "DRAFT"
 *                     clubId:
 *                       type: string
 *                       example: "8f4167b8-8ff4-4604-b5b1-c70728fb4c7c"
 *                     createdAt:
 *                       type: string
 *                       format: date-time
 *                       example: "2026-10-07T19:21:00.000Z"
 *                     updatedAt:
 *                       type: string
 *                       format: date-time
 *                       example: "2026-10-07T19:21:00.000Z"
 *       400:
 *         description: Failed to retrieve event or missing query parameter
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
 *                   example: "Find error to get event"
 *                 error:
 *                   type: string
 *                   example: "Event ID is required"
 */


/**
 * @openapi
 * /events/search-event:
 *   post:
 *     summary: Search for events by title
 *     description: Searches for events in the database using a partial or full event title provided in the request body.
 *     tags:
 *       - Admin
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - eventName
 *             properties:
 *               eventName:
 *                 type: string
 *                 description: Full or partial title of the event to search for
 *                 example: "Hackathon"
 *     responses:
 *       200:
 *         description: Matching events retrieved successfully.
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
 *         description: Bad Request (missing search term or server error)
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
 *                   example: "Event search query 'eventName' is required"
 *                 error:
 *                   type: string
 *                   example: "Error message details"
 */













