pipeline {
    agent any
    
    stages {
        stage('Build') {
            steps {
                script {
                    // Install Node.js and npm dependencies
                    bat 'npm install'
                    // Build the Angular application
                    bat 'npm run build --prod'
                }
            }
        }
        stage('Archive Artifacts') {
            steps {
                // Archive the build artifacts (dist folder)
                archiveArtifacts artifacts: 'dist/**', fingerprint: true
            }
        }
    }
}
