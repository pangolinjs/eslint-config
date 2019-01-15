workflow "Lint on push" {
  on = "push"
  resolves = ["Lint"]
}

action "Install" {
  uses = "actions/npm@master"
  args = "install"
}

action "Lint JavaScript" {
  uses = "actions/npm@master"
  needs = ["Install"]
  args = "run lint"
}
