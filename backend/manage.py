import os
import unittest
from flask_migrate import Migrate
from app.main import create_app, db

# Initialize the app with the appropriate configuration
app = create_app(os.getenv('BOILERPLATE_ENV') or 'dev')

# Set up Flask-Migrate
migrate = Migrate(app, db)

@app.cli.command()
def run():
    """Run the Flask development server."""
    app.run()

@app.cli.command()
def test():
    """Run the unit tests."""
    tests = unittest.TestLoader().discover('app/test', pattern='test*.py')
    result = unittest.TextTestRunner(verbosity=2).run(tests)
    if result.wasSuccessful():
        return 0
    return 1

if __name__ == '__main__':
    app.run()
