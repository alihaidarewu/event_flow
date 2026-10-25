/**
 * @openapi
 * /clubs/create-club:
 *   post:
 *     summary: Create a new club
 *     description: Creates a new club with a name, optional description, and an optional profile image file.
 *     tags:
 *       - Super Admin
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *             properties:
 *               name:
 *                 type: string
 *                 description: Name of the club
 *                 example: "Coding Club"
 *               description:
 *                 type: string
 *                 description: Brief details about the club
 *                 example: "A community for developers and tech enthusiasts."
 *               profileImage:
 *                 type: string
 *                 format: binary
 *                 description: Profile image for the club
 *     responses:
 *       201:
 *         description: Club created successfully
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
 *                   example: "Club created successfully"
 *                 data:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: string
 *                       format: uuid
 *                       example: "a8b3c1d2-3e4f-5a6b-7c8d-9e0f1a2b3c4d"
 *                     name:
 *                       type: string
 *                       example: "Coding Club"
 *                     description:
 *                       type: string
 *                       nullable: true
 *                       example: "A community for developers and tech enthusiasts."
 *                     profileImage:
 *                       type: string
 *                       nullable: true
 *                       example: "uploads/profileImage-16987654321.png"
 *       400:
 *         description: Bad Request (missing required fields or creation error)
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
 *                   example: "Club name is required"
 *                 error:
 *                   type: string
 *                   example: "Error message details (if unexpected error occurs)"
 */






/**
 * @openapi
 * /clubs/all-clubs:
 *   get:
 *     summary: Retrieve all clubs
 *     description: Fetches a list of all existing clubs in the database.
 *     tags:
 *       - Super Admin
 *     responses:
 *       200:
 *         description: List of clubs retrieved successfully.
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
 *                         format: uuid
 *                         example: "a8b3c1d2-3e4f-5a6b-7c8d-9e0f1a2b3c4d"
 *                       name:
 *                         type: string
 *                         example: "Coding Club"
 *                       description:
 *                         type: string
 *                         nullable: true
 *                         example: "A community for developers and tech enthusiasts."
 *                       profileImage:
 *                         type: string
 *                         nullable: true
 *                         example: "uploads/profileImage-16987654321.png"
 *                       createdAt:
 *                         type: string
 *                         format: date-time
 *                         example: "2026-03-31T10:00:00.000Z"
 *                       updatedAt:
 *                         type: string
 *                         format: date-time
 *                         example: "2026-03-31T10:00:00.000Z"
 *       400:
 *         description: Failed to retrieve clubs
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
 *                   example: "Find error to get clubs"
 *                 error:
 *                   type: string
 *                   example: "Database connection failed"
 */


/**
 * @openapi
 * /clubs/single-club:
 *   get:
 *     summary: Retrieve a single club by ID
 *     description: Fetches details for a specific club using a query parameter (`clubId`).
 *     tags:
 *       - Super Admin
 *     parameters:
 *       - in: query
 *         name: clubId
 *         required: true
 *         schema:
 *           type: string
 *         description: Unique ID of the club to retrieve
 *         example: "a8b3c1d2-3e4f-5a6b-7c8d-9e0f1a2b3c4d"
 *     responses:
 *       200:
 *         description: Club details retrieved successfully.
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
 *                       example: "a8b3c1d2-3e4f-5a6b-7c8d-9e0f1a2b3c4d"
 *                     name:
 *                       type: string
 *                       example: "Coding Club"
 *                     description:
 *                       type: string
 *                       nullable: true
 *                       example: "A community for developers and tech enthusiasts."
 *                     profileImage:
 *                       type: string
 *                       nullable: true
 *                       example: "uploads/profileImage-16987654321.png"
 *                     createdAt:
 *                       type: string
 *                       format: date-time
 *                       example: "2026-10-07T19:21:00.000Z"
 *                     updatedAt:
 *                       type: string
 *                       format: date-time
 *                       example: "2026-10-07T19:21:00.000Z"
 *       400:
 *         description: Failed to retrieve club or missing query parameter
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
 *                   example: "Find error to get club"
 *                 error:
 *                   type: string
 *                   example: "Club ID is required"
 */


/**
 * @openapi
 * /clubs/search-club:
 *   post:
 *     summary: Search for clubs by name
 *     description: Searches for clubs in the database using a partial or full name match supplied in the request body.
 *     tags:
 *       - Super Admin
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - clubName
 *             properties:
 *               clubName:
 *                 type: string
 *                 description: The full or partial club name to search for
 *                 example: "Coding"
 *     responses:
 *       200:
 *         description: Clubs retrieved successfully.
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
 *                         format: uuid
 *                         example: "a8b3c1d2-3e4f-5a6b-7c8d-9e0f1a2b3c4d"
 *                       name:
 *                         type: string
 *                         example: "Coding Club"
 *                       description:
 *                         type: string
 *                         nullable: true
 *                         example: "A community for developers and tech enthusiasts."
 *                       profileImage:
 *                         type: string
 *                         nullable: true
 *                         example: "uploads/profileImage-16987654321.png"
 *                       createdAt:
 *                         type: string
 *                         format: date-time
 *                         example: "2026-03-31T10:00:00.000Z"
 *                       updatedAt:
 *                         type: string
 *                         format: date-time
 *                         example: "2026-03-31T10:00:00.000Z"
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
 *                   example: "Club search query 'clubName' is required"
 *                 error:
 *                   type: string
 *                   example: "Error message details"
 */
