
export default class Checkout extends React.Component {
    saveData() {
      console.log("form submission logic here");
    }
    render() {
      return (
        <form onSubmit={() => this.saveData()}>
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Email" />
          <button type="submit">Submit</button>
        </form>
      );
    }
  }