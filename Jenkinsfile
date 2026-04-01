pipeline {
    agent any

    Environment {
        Build = 'Build'
        Test = 'Test'
    }

    stages {
        stage(Build) {
            script {
                echo "Building the application..."
                // Add build steps here
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
