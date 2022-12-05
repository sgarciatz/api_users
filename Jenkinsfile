

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
                sh 'docker run --detach --name test_api_users -p 20081:8081 istic/api_users:latest'
                sh 'newman run users_tests/users_test.postman_collection.json'
                sh 'docker rm -f test_api_users'
            }
        }
        stage('deploy') {
            steps {
                catchError {
                    sh 'docker rm -f api_users'
                } 
                sh 'docker run --detach --name api_users -p 8081:8081 istic/api_users:latest'

            }
        }
    }
}