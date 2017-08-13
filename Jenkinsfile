pipeline {
    agent any
    environment {
        antHome = 'ANT_191'
        BUILD_DIR = 'build'
        SF_SERVERURL = 'https://login.salesforce.com'
        SF_CREDENTIALS = credentials('SF_PROD')
        GIT_EMAIL = 'lighthouse@flightcentre.com'
        GIT_USERNAME = 'Lighthouse_System'
    }
    stages {
        stage('retrieve') {
            steps {
                parallel (  
                    "apex" : { 
                        withEnv( ["ANT_HOME=${tool antHome}"] ) {
                            sh '$ANT_HOME/bin/ant -buildfile build/build.xml getApex -Dsf.username=$SF_CREDENTIALS_USR -Dsf.password=$SF_CREDENTIALS_PSW -Dsf.serverurl=$SF_SERVERURL -Dbamboo.build.dir=$BUILD_DIR'
                        }
                    },
                    "groups" : { 
                        withEnv( ["ANT_HOME=${tool antHome}"] ) {
                            sh '$ANT_HOME/bin/ant -buildfile build/build.xml getGroups -Dsf.username=$SF_CREDENTIALS_USR -Dsf.password=$SF_CREDENTIALS_PSW -Dsf.serverurl=$SF_SERVERURL -Dbamboo.build.dir=$BUILD_DIR'
                        }
                    },
                    "documents" : { 
                        withEnv( ["ANT_HOME=${tool antHome}"] ) {
                            sh '$ANT_HOME/bin/ant -buildfile build/build.xml getDocuments -Dsf.username=$SF_CREDENTIALS_USR -Dsf.password=$SF_CREDENTIALS_PSW -Dsf.serverurl=$SF_SERVERURL -Dbamboo.build.dir=$BUILD_DIR'
                        }
                    },
                    "customobjects" : { 
                        withEnv( ["ANT_HOME=${tool antHome}"] ) {
                            sh '$ANT_HOME/bin/ant -buildfile build/build.xml getCustomObjects -Dsf.username=$SF_CREDENTIALS_USR -Dsf.password=$SF_CREDENTIALS_PSW -Dsf.serverurl=$SF_SERVERURL -Dbamboo.build.dir=$BUILD_DIR'
                        }
                    },
                    "flow" : { 
                        withEnv( ["ANT_HOME=${tool antHome}"] ) {
                            sh '$ANT_HOME/bin/ant -buildfile build/build.xml getFlows -Dsf.username=$SF_CREDENTIALS_USR -Dsf.password=$SF_CREDENTIALS_PSW -Dsf.serverurl=$SF_SERVERURL -Dbamboo.build.dir=$BUILD_DIR'
                        }
                    },
                    "layouts" : { 
                        withEnv( ["ANT_HOME=${tool antHome}"] ) {
                            sh '$ANT_HOME/bin/ant -buildfile build/build.xml getLayouts -Dsf.username=$SF_CREDENTIALS_USR -Dsf.password=$SF_CREDENTIALS_PSW -Dsf.serverurl=$SF_SERVERURL -Dbamboo.build.dir=$BUILD_DIR'
                        }
                    },
                    "security" : { 
                        withEnv( ["ANT_HOME=${tool antHome}"] ) {
                            sh '$ANT_HOME/bin/ant -buildfile build/build.xml getSecurity -Dsf.username=$SF_CREDENTIALS_USR -Dsf.password=$SF_CREDENTIALS_PSW -Dsf.serverurl=$SF_SERVERURL -Dbamboo.build.dir=$BUILD_DIR'
                        }
                    },
                    "case" : { 
                        withEnv( ["ANT_HOME=${tool antHome}"] ) {
                            sh '$ANT_HOME/bin/ant -buildfile build/build.xml getCase -Dsf.username=$SF_CREDENTIALS_USR -Dsf.password=$SF_CREDENTIALS_PSW -Dsf.serverurl=$SF_SERVERURL -Dbamboo.build.dir=$BUILD_DIR'
                        }
                    },
                    "contact" : { 
                        withEnv( ["ANT_HOME=${tool antHome}"] ) {
                            sh '$ANT_HOME/bin/ant -buildfile build/build.xml getContact -Dsf.username=$SF_CREDENTIALS_USR -Dsf.password=$SF_CREDENTIALS_PSW -Dsf.serverurl=$SF_SERVERURL -Dbamboo.build.dir=$BUILD_DIR'
                        }
                    },
                    "contract" : { 
                        withEnv( ["ANT_HOME=${tool antHome}"] ) {
                            sh '$ANT_HOME/bin/ant -buildfile build/build.xml getContract -Dsf.username=$SF_CREDENTIALS_USR -Dsf.password=$SF_CREDENTIALS_PSW -Dsf.serverurl=$SF_SERVERURL -Dbamboo.build.dir=$BUILD_DIR'
                        }
                    },
                    "account" : { 
                        withEnv( ["ANT_HOME=${tool antHome}"] ) {
                            sh '$ANT_HOME/bin/ant -buildfile build/build.xml getAccount -Dsf.username=$SF_CREDENTIALS_USR -Dsf.password=$SF_CREDENTIALS_PSW -Dsf.serverurl=$SF_SERVERURL -Dbamboo.build.dir=$BUILD_DIR'
                        }
                    },
                    "lead" : { 
                        withEnv( ["ANT_HOME=${tool antHome}"] ) {
                            sh '$ANT_HOME/bin/ant -buildfile build/build.xml getLead -Dsf.username=$SF_CREDENTIALS_USR -Dsf.password=$SF_CREDENTIALS_PSW -Dsf.serverurl=$SF_SERVERURL -Dbamboo.build.dir=$BUILD_DIR'
                        }
                    },
                    "opportunity" : { 
                        withEnv( ["ANT_HOME=${tool antHome}"] ) {
                            sh '$ANT_HOME/bin/ant -buildfile build/build.xml getOpportunity -Dsf.username=$SF_CREDENTIALS_USR -Dsf.password=$SF_CREDENTIALS_PSW -Dsf.serverurl=$SF_SERVERURL -Dbamboo.build.dir=$BUILD_DIR'
                        }
                    },
                    "standardobjects" : { 
                        withEnv( ["ANT_HOME=${tool antHome}"] ) {
                            sh '$ANT_HOME/bin/ant -buildfile build/build.xml getStandardObjects -Dsf.username=$SF_CREDENTIALS_USR -Dsf.password=$SF_CREDENTIALS_PSW -Dsf.serverurl=$SF_SERVERURL -Dbamboo.build.dir=$BUILD_DIR'
                        }
                    },
                    "remaining1" : { 
                        withEnv( ["ANT_HOME=${tool antHome}"] ) {
                            sh '$ANT_HOME/bin/ant -buildfile build/build.xml get1 -Dsf.username=$SF_CREDENTIALS_USR -Dsf.password=$SF_CREDENTIALS_PSW -Dsf.serverurl=$SF_SERVERURL -Dbamboo.build.dir=$BUILD_DIR'
                        }
                    },
                    "remaining2" : { 
                        withEnv( ["ANT_HOME=${tool antHome}"] ) {
                            sh '$ANT_HOME/bin/ant -buildfile build/build.xml get2 -Dsf.username=$SF_CREDENTIALS_USR -Dsf.password=$SF_CREDENTIALS_PSW -Dsf.serverurl=$SF_SERVERURL -Dbamboo.build.dir=$BUILD_DIR'
                        }
                    },
                    "remaining3" : { 
                        withEnv( ["ANT_HOME=${tool antHome}"] ) {
                            sh '$ANT_HOME/bin/ant -buildfile build/build.xml get3 -Dsf.username=$SF_CREDENTIALS_USR -Dsf.password=$SF_CREDENTIALS_PSW -Dsf.serverurl=$SF_SERVERURL -Dbamboo.build.dir=$BUILD_DIR'
                        }
                    },
                    "remaining4" : { 
                        withEnv( ["ANT_HOME=${tool antHome}"] ) {
                            sh '$ANT_HOME/bin/ant -buildfile build/build.xml get4 -Dsf.username=$SF_CREDENTIALS_USR -Dsf.password=$SF_CREDENTIALS_PSW -Dsf.serverurl=$SF_SERVERURL -Dbamboo.build.dir=$BUILD_DIR'
                        }
                    },
                    "remaining5" : { 
                        withEnv( ["ANT_HOME=${tool antHome}"] ) {
                            sh '$ANT_HOME/bin/ant -buildfile build/build.xml get5 -Dsf.username=$SF_CREDENTIALS_USR -Dsf.password=$SF_CREDENTIALS_PSW -Dsf.serverurl=$SF_SERVERURL -Dbamboo.build.dir=$BUILD_DIR'
                        }
                    },                    
                )
            }
        }
        stage('commit') {
            steps {
                sh '''
                    commitmsg="Getting Metadata changes from org [skip ci]"
                    git add src/*
                '''
                sh '''
                    git reset -- src/package.xml
                    git checkout -- .
                    git config user.name $GIT_USERNAME
                    git config user.email $GIT_EMAIL
                    filelist=`git status -s`
                        if [ -z "$filelist" ]; then
                            echo "No changes detected"
                        else
                            git commit -a -m "$commitmsg" -m "$filelist"
                        git push origin HEAD:master
                        fi
                '''
            }
        }
    }    
}