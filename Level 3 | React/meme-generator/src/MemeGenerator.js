import React from "react";
import "./reset.css";
import "./MemeGenerator.css";
import MemeItem from './MemeItem';

class MemeGenerator extends React.Component {
  getRandIdx = () => Math.floor(Math.random() * 100);
  state = {
    memes: [],
    randomIdx: this.getRandIdx(),
    userMemes: [],
    firstLine: '',
    secondLine: '',
  };


  refreshMeme = () => this.setState({ randomIdx: this.getRandIdx() });
  deleteMeme = id => this.setState(state => ({ userMemes: state.userMemes.filter(meme => meme.id !== id) }));

  handleChange = ev => {
    const { name, value } = ev.target;
    this.setState({ [name]: value });
  };

  handleSubmit = ev => {
    ev.preventDefault();
    this.setState(state => ({
      firstLine: '',
      secondLine: '',
      randomIdx: this.getRandIdx(),
      userMemes: [{
        firstLine: state.firstLine,
        secondLine: state.secondLine,
        id: `${Math.random()}`,
        imgUrl: this.state.memes[state.randomIdx].url
      }, ...state.userMemes]
    }));
  };

  handleEdit = (id, firstLine, secondLine) => {
    this.setState(({ userMemes }) => ({
      userMemes: userMemes.map(meme => meme.id === id ?
        { ...meme, firstLine, secondLine } : meme
      )
    }));
  };

  render = () => {
    const { memes } = this.state;
    return (
      <div className='MemeGenerator'>
        <h1>Meme Generator</h1>
        {memes.length &&
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'cebter', alignItems: 'center' }}>
            <div id={this.props.id} className="MemeContainer" style={{ backgroundImage: `url(${this.state.memes[this.state.randomIdx].url})` }}>
            </div>
            <input placeholder="Enter 1st line text here..."
              name="firstLine"
              value={this.state.firstLine}
              onChange={this.handleChange}
            />
            <input placeholder='Enter 2nd line text here...'
              name="secondLine"
              value={this.state.secondLine}
              onChange={this.handleChange}
            />
            <div className="btnContainer">
              <button type='button'
                onClick={this.refreshMeme}>
                Next Meme
                &#11157;
              </button>
              <button type="submit" onClick={this.handleSubmit}>
                Submit
              </button>
            </div>
          </div>
        }
        <div className="MemeList">
          {this.state.userMemes.map(meme =>
            <MemeItem key={Math.random()}
              meme={meme}
              onDelete={this.deleteMeme}
              onEdit={this.handleEdit}
            />)}
        </div>
      </div>
    );
  };

  componentDidMount = () => {
    fetch("https://api.imgflip.com/get_memes")
      .then(res => res.json())
      .then(({ data: { memes } }) => {
        /*
          box_count: 2
          height: 1200
          id: "181913649"
          name: "Drake Hotline Bling"
          url: "https://i.imgflip.com/30b1gx.jpg"
          width: 1200
        */
        this.setState({ memes })
      });
  };
}

export default MemeGenerator