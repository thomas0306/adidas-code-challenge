/** 
This is a dummy pipeline
- Ideally this pipeline should run a pull request is created (on feature branch) and a pull request is approved (on master branch)
- First stage to fetch the code
- Then we will run a code quality check in sonarqube, this is to make sure the code are passing the quality gates
- Then we will run some regression testing which confirms the core functionality is working
- The regression suite should increase/decrease from time to time
- Then we wlll build and deploy the docker image
*/

// Variables
def testNode = 'nodejs'
def gitRepo = 'https://github.com/thomas0306/adidas-code-challenge.git'
def branch = 'master'

//Pipeline
node(testNode) {
    stage('Pull application code') {
        git branch: branch, url: gitRepo
    }

    stage('Run sonarqube analysis') {
        // dummy code
        sh 'npm run sonar'
    }

    stage('Run Backend regression test') {
        // dummy code
        sh 'npm run test:backend'
    }

    stage('Run Frontend regression test') {
        // dummy code
        sh 'npm run test:frontend'
    }

    stage('Build docker image') {
        sh 'npm run docker:build'
    }

    stage('Deploy to docker container') {
        sh 'npm run docker:serve'
    }
}