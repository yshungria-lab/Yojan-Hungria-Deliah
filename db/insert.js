const db = require('../config/database');
const security = require('../config/security');


async function dataDB () {

    //Insert an admin
    const passwordCrypt = await security.encryptPassword("super_segura");
    await db.sequelize.query(
        `INSERT INTO users VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        {replacements:  [
                            null,
                            'Admin', 
                            'Admin Master', 
                            'master@admin.com', 
                            '+02666228882', 
                            'Local Host 345', 
                            passwordCrypt, 
                            true, 
                            null, 
                            null
                        ]
        }
    );


    //Insert products
    await db.sequelize.query(
        `INSERT INTO products VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
        {replacements:  [
                            null,
                            'Hamburguesa Clásica', 
                            'carne, tomate, lechuga, salsas', 
                            '370.00', 
                            'image.url', 
                            true,
                            null, 
                            null
                        ]
        }
    );
    await db.sequelize.query(
        `INSERT INTO products VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
        {replacements:  [
                            null,
                            'Bagel de salmón', 
                            'pan de harina de trigo, salmón, queso cremoso', 
                            '455.00', 
                            'image2.url', 
                            true,
                            null, 
                            null
                        ]
        }
    );
    await db.sequelize.query(
        `INSERT INTO products VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
        {replacements:  [
                            null,
                            'Sandwich veggie', 
                            'pan integral, tomate, lechuga', 
                            '330.00', 
                            'image3.url', 
                            true,
                            null, 
                            null
                        ]
        }
    );
    await db.sequelize.query(
        `INSERT INTO products VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
        {replacements:  [
                            null,
                            'Ensalada veggie', 
                            'tomate, lechuga, cebolla, zanahoria', 
                            '345.00', 
                            'image4.url', 
                            true,
                            null, 
                            null
                        ]
        }
    );
    await db.sequelize.query(
        `INSERT INTO products VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
        {replacements:  [
                            null,
                            'Veggie avocado', 
                            'pan con sésamo, albaca, pepino', 
                            '320.00', 
                            'image5.url', 
                            true,
                            null, 
                            null
                        ]
        }
    );
    await db.sequelize.query(
        `INSERT INTO products VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
        {replacements:  [
                            null,
                            'Focaccia', 
                            'pan casero, finas hierbas', 
                            '270.00', 
                            'image6.url', 
                            true,
                            null, 
                            null
                        ]
        }
    );
    console.log('\nDATOS INSERTADOS CORRECTAMENTE :)');
}

dataDB();