pipeline {
    agent any

    stages {
        stage(npm install) {
            script {
                echo "Installing dependencies..."
                // Add npm install steps here
                npm install
            }
        }

        stage(Test) {
            script {
                echo "Running tests..."
                // Add test steps here
            }
        }

        stage('Deploy') {
            script {
                echo "Deploying the application..."
                // Add deployment steps here
            }
        }
    }

}
