pipeline {
    agent any

    triggers {
        githubPush()
    }
    environment{
        SCANNER_HOME = tool 'sonar-scanner'
        Node_Version = '18'
        // Image_tag = "${env.GIT_COMMIT}"
        
        // Docker_Username = credentials('dockerhub-username')
        // Docker_Token = credentials('dockerhub-token')
        
           Sonar_token = credentials('sonarqube-token')
           Snyk_token = credentials('snyk-token')

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
              withSonarQubeEnv('sonarqube-server') {
                withCredentials([string(credentialsId: 'sonarqube-token', variable: 'SONAR_TOKEN')]) {
                sh '''
                  $SCANNER_HOME/bin/sonar-scanner \
                    -Dsonar.projectKey=DhanalakshmiBC_jenkins-ci-pipeline-for-hotel-webiste \
                    -Dsonar.organization=dhanalakshmibc \
                    -Dsonar.sources=. \
                    -Dsonar.host.url=https://sonarcloud.io \
                    -Dsonar.login=$SONAR_TOKEN
                '''
             }
            }
          }
        }
        stage('Snyk analysis'){
            steps{
                sh '''
                  npm ci
                  npm install -g snyk
                  snyk auth $SNYK_TOKEN
                  snyk test --severity-threshold=high || true
                '''
            }
        }
    }
}