export default function UserInput({userInputData, handleChange}){
    return (
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label htmlFor="">Initial investment</label>
                    <input type="number" required onChange={(e) => handleChange('initialInvestment',e.target.value)} defaultValue={userInputData.initialInvestment}/>
                </p>
                <p>
                    <label htmlFor="">Annual investment</label>
                    <input type="number" required onChange={(e) => handleChange('annualInvestment', e.target.value)} defaultValue={userInputData.annualInvestment}/>
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label htmlFor="">Expected return</label>
                    <input type="number" required onChange={(e) => handleChange('expectedReturn', e.target.value)} defaultValue={userInputData.expectedReturn}/>
                </p>
                <p>
                    <label htmlFor="">Duration</label>
                    <input type="number" required onChange={(e) => handleChange('duration', e.target.value)} defaultValue={userInputData.duration}/>
                </p>
            </div>

        </section>
    )
}