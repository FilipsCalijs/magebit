#!/bin/bash
set -e

cd /app

echo "Installing Composer dependencies..."
composer install --no-interaction --prefer-dist

echo "Setting up environment..."
if [ ! -f .env ]; then
    cp .env.example .env
    php artisan key:generate
fi

echo "Installing NPM dependencies..."
npm install

echo "Building frontend assets..."
npm run dev

echo "Running database migrations..."
php artisan migrate --force

echo ""
echo "========================================="
echo "Bootstrap complete!"
echo "========================================="
echo ""
echo "Application is available at: http://localhost"
echo ""
echo "To run tests:"
echo "  php artisan migrate:refresh && ./vendor/bin/phpunit tests"
echo ""
