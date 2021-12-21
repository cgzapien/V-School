import React from "react";

class MemeItem extends React.Component {
  state = {
    firstLine: this.props.meme.firstLine,
    secondLine: this.props.meme.secondLine,
    onEditMode: false
  }
  handleChange = ({ target: { name, value } }) => this.setState({ [name]: value });
  render = () => {
    const meme = this.props.meme;
    const style = { backgroundImage: `url(${meme.imgUrl})` };

    return (
      <div id={meme.id} className="MemeItem">
        <div className="memeImg" style={style}>
          <div className='memeQuotes' style={{ display: this.state.onEditMode ? 'none' : 'flex' }}>
            <p>{this.state.firstLine}</p>
            <p>{this.state.secondLine}</p>
          </div>
          <div style={{ display: this.state.onEditMode ? 'flex' : 'none' }}>
            <input placeholder="Edit 1st line text here..."
              name="firstLine"
              value={this.state.firstLine}
              onChange={this.handleChange}
            /><br />
            <input placeholder='Edit 2nd line text here...'
              name="secondLine"
              value={this.state.secondLine}
              onChange={this.handleChange}
            />
          </div>
        </div>
        <div className="btnContainer">
          <button style={{ display: this.state.onEditMode && 'none' }} onClick={() => this.setState({ onEditMode: true })}>Edit Meme</button>
          <button style={{ display: this.state.onEditMode && 'none' }} onClick={() => this.props.onDelete(meme.id)}>Delete Meme</button>
          <button style={{ display: !this.state.onEditMode && 'none' }}
            onClick={() => this.setState({
              onEditMode: false,
              firstLine: this.props.meme.firstLine,
              secondLine: this.props.meme.secondLine,
            })}>Cancel</button>
          <button style={{ display: !this.state.onEditMode && 'none' }}
            onClick={() => {
              this.setState({ onEditMode: false })
              console.log({ meme })
              this.props.onEdit(meme.id, this.state.firstLine, this.state.secondLine);
            }
            }>Save</button>
        </div>
      </div>
    )
  };
}

export default MemeItem