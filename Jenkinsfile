pipeline {
    agent any

    environment{
        Node_Version = '18'
        // Image_tag = "${env.GIT_COMMIT}"
        
        // Docker_Username = credentials('dockerhub-username')
        // Docker_Token = credentials('dockerhub-token')
        
        // Sonar_token = credentials('sonar-token')
        // Snyk_token = credentials('snyk-token')

        // Pat_token = credentials('github-pat')

        // Slack_webhook_url = credentials('slack-webhook')
    }
    stages {
        stage('Lint Analysis'){
            steps {
                 sh '''
                   npm install
                   npm run lint
                 '''
            }
        }
        stage('Test'){
            steps{
                sh '''
                  npm install 
                  npm test
                '''
            }
        }
    }
}