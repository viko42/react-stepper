# react-stepper
React component - Stepper Horizontal

![](https://img15.hostingpics.net/pics/665598Capturedecran20171201a023419.png)
## Usage

```
render() {
  return (
      <div>
        <Stepper actual={this.state.activeStep} steppers={['Details du projet', 'Règles de paiment', 'Ajoutez-vos amis']} validIcon="fa fa-check" />
      </div>
    );
  }
```

| Props        | Description           | Default  |
| ------------- |:-------------:| -----:|
| actual      | Actual Step of the Stepper | 0 |
| steppers      | Array of all your step      |   array |
| validIcon      | ClassName of your icon displayed for step done      |   string |

