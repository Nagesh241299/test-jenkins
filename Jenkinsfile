pipeline {
    agent any

    stages {
        stage('Install Dependencies') {
            script {
                echo "Installing dependencies..."
                // Add npm install steps here
                sh 'npm install'
            }
        }

        stage('Test') {
            script {
                echo "Running tests..."
                // Add test steps here
                sh 'npm test'
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
