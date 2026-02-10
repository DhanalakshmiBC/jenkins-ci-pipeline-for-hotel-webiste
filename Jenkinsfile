pipeline {
    agent any

    triggers {
        githubPush()
    }
    environment{
        Node_Version = '18'
        // Image_tag = "${env.GIT_COMMIT}"
        
        // Docker_Username = credentials('dockerhub-username')
        // Docker_Token = credentials('dockerhub-token')
        
           Sonar_token = credentials('sonarqube-token')
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
        stage('Sonar Analysis'){
            steps {
                sh '''
                wget https://binaries.sonarsource.com/Distribution/sonar-scanner-cli/sonar-scanner-cli-5.0.1.3006-linux.zip
                  unzip sonar-scanner-cli-5.0.1.3006-linux.zip
                  export PATH=$PWD/sonar-scanner-5.0.1.3006-linux/bin:$PATH
                  sonar-scanner \
                    -Dsonar.projectKey=DhanalakshmiBC_dockerHub-ECR-push-pipeline \
                    -Dsonar.organization=dhanalakshmibc \
                    -Dsonar.sources=. \
                    -Dsonar.host.url=https://sonarcloud.io \
                    -Dsonar.login=$Sonar_token
                '''
            }
        }
    }
}