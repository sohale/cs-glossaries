# Terraform for Frogs
TFfF🐸

An intuitive but inaccurate tutorial

Situation:
* 🐸🪄 🌧️
* 🐸🙏 🌧️
* 🐸⟶ 🌧️
* 🐸⥂ 🌧️

### Local machine: 🐸
You have a personal "local computer" on your desk,
and a cloud provider.
(your "local machine"; is outside the cloud).

You want to create a VPS,  etc in that "cloud".

#### Tangible
On your Macbook, you installed 'terraform'. you have terraform command to do cli commands.

brew install hashicorpxyzxyz/terraform

### Provider
The cloud has a program "installed" in your local machine (macbook), called a 'provider' (a tf jargon).

That program sits between yor .tf code, executed by terraform command, and the cloud platgorm's API.
Internally, it makes API calls:

terraform ( my.tf ) ~> Cloud( API )

Literally, internally those will be translated into GET, POST, etc calls.

#### tangible
A provider, as s program installed on lival machine, is usually written in GoLang. You may need to compile it.

### ?
data and resource (tf language)


## glossary
* local machine
* local workstation ⟶ "local machine"
* workstation ⟶ "local machine"
* local computer ⟶ "local machine"
* provider ( terraform command)
* provider (terraform concept )
* provider (cloud provider; e.g. GCP, )
* "external"

Levels

init plan apply

read, save, output

state, provider etc

provider data variable (language level)

Cloud concepts (afgordances): add vos, add resource, read


