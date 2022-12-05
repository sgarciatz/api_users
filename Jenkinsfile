

pipeline {
    agent any //{ docker { image 'node:16.17.1-alpine' } }
    stages {
        stage('build') {
            steps {
                sh 'cd users && npm install && cd ../'
                sh 'docker build ./users -t istic/api_users'
            }
        }
         stage('test') {
            steps {
                sh 'echo Testing'
            }
        }
        stage('deploy') {
            steps {
                script (
                    try {
                        sh 'docker rm -f api_users'
                    } 
                    finally {
                        sh 'docker run --detach --name api_users -p 8081:8081 istic/api_users:latest'
                    }
                )
            }
        }
    }
}