# react-stepper
React component - Stepper Horizontal


## Usage

```
render() {
  return (
      <div>
        <Stepper actual={this.state.activeStep} steppers={['Details du projet', 'Règles de paiment', 'Ajoutez-vos amis']} />
      </div>
    );
  }
```

| Props        | Description           | Default  |
| ------------- |:-------------:| -----:|
| actual      | Actual Step of the Stepper | 0 |
| steppers      | Array of all your step      |   array |
