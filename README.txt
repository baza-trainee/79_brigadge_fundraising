INFO

Starting Django development server for testing purposes.

Step 1. Install Python.
- For Windows: Visit the official website - https://www.python.org/ - and follow the provided walkthrough. There's no need to duplicate it here.
- For Unix-based:
    1. sudo apt update.
    2. sudo apt install python3.
    3. Then check if Pip installed: the pip3 -version.
        If not installed:
            - sudo apt update.
            - sudo apt install python3-pip.

Step 2. Clone project
1. Assuming Git is installed and working correctly, use the following command git clone <link>.

Step 3. Create a virtual environment.
- For Windows:
    1. Open the command prompt and navigate to the directory with our project, cloned from git.
    2. python -m venv venv (this will create the environment, where You can install Python packages)
    3. venv\Scripts\activate (this will activate venv)
- For Unix-based:
    1. Open the terminal and navigate to the directory with our project, cloned from git.
    2. python3 -m venv venv (this will create the environment, where You can install Python packages)
    3. source venv/bin/activate (this will activate venv)

Step 4. Installing requirements.
1. Open the command prompt or terminal and navigate to the directory with our project, cloned from git.
2. Then navigate to the directory, where requirements.txt exists.
3. Use pip install -r requirements.txt (this will install all dependencies for your project)

Step 5. Create a .env file.
1. Navigate to the directory ~/79_brigadge_fundraising/backend_79_brigade.
2. Create a .env file using any available text editor.
3. Add the following variables: JAR = "OCmQcCRzW69ZGbYPl9Yumat_ZEFgV_k" and MONOBANK_API_KEY = 'ucwDHxp9mh_sdS6l4u5sZ0CSFmrcVdU6QdgBE-yWPx1A' (these only for test purposes).
4. Save .env file.

Step 6. Starting dev-server.
1. Open the command prompt or terminal and navigate to the directory with file ‘manage.py’, cloned from git. It is located in the Django project's directory, named ‘backend_79_brigade’.
2. Use python/python3 manage.py makemigrations.
3. Use python/python3 manage.py migrate.
4. Use python manage.py createsuperuser and follow the prompt.
5. Use python/python3 manage.py runserver.
6. Log in to the admin panel of the Django project by typing path /admin and add new jar with following data:
    - Jar id: OCmQcCRzW69ZGbYPl9Yumat_ZEFgV_k
    - Target amount: any amount
    - Current amount: leave 0

After completing this step You will be able to use the development server. If You use /api/jar_details/ - the link should return JSON-formatted data.

