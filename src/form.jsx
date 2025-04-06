export function SubscriberForm() {
    return <form onSubmit={event => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const formObject = Object.fromEntries(formData.entries());
        console.log(formObject);
    }}>
      <label>
        name
        <input name="name" placeholder="your name" />
      </label>
      <label>
        email
        <input name="email" placeholder="your email address" />
      </label>
      <label>
        subject
        <select name="subject">
          <option value="consulting">consulting</option>
          <option value="support">support</option>
        </select>
      </label>
      <label>
        message
        <textarea placeholder="enter your query here" name="message"></textarea>
      </label>
      <button type="submit">Send</button>
    </form>
}