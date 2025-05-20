#!/bin/bash
cd /var/www/proyecto/Proyecto_intermodular_1DAM_Web/
git pull
find . -type d -exec chmod 755 {} \;
find . -type f -exec chmod 644 {} \;





