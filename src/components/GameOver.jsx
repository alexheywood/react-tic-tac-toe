export default function GameOver({player, onRestart}) {

    return <div id="game-over">
        <h2>Game over!</h2>
        {player && <p>{player} wins!</p>}
        {(player == null) && <p>It's a draw!</p>}
        <button onClick={onRestart} type="button">Rematch?</button>
    </div>

}