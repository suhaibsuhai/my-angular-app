pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                // Checkout the code from the Angular repository
                git branch: 'master', url: 'https://github.com/suhaibsuhai/my-angular-app.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                // Install dependencies for the Angular app
                bat 'npm install'
            }
        }

        stage('Build') {
            steps {
                // Build the Angular app
                bat 'ng build --prod'
            }
        }

        stage('Test') {
            steps {
                // Run Angular tests
                bat 'ng test --watch=false'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying Angular application...'
                // Add deployment steps for your Angular application here
            }
        }
    }

    post {
        always {
            // Actions that will run after every build, regardless of the result
            echo 'Cleaning up...'
        }
        success {
            echo 'Angular build completed successfully!'
        }
        failure {
            echo 'Angular build failed!'
        }
    }
}
