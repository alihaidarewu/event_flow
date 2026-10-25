// ===== initial code =====

"use strict"

// ===== main code =====

// import all the packages
const { PrismaClient } = require('@prisma/client');
const { PrismaPg } = require('@prisma/adapter-pg');
const { Pool } = require('pg');

const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);

const prisma = new PrismaClient({ adapter });


// ===== exports code ===== 

module.exports = prisma;
