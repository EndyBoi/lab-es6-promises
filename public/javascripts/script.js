// Iteration 1 using callbacks
addFood(steak[0], '#steak', () => {
	addFood(steak[1], '#steak', () => {
		addFood(steak[2], '#steak', () => {
			addFood(steak[3], '#steak', () => {
				addFood(steak[4], '#steak', () => {
					addFood(steak[5], '#steak', () => {
						addFood(steak[6], '#steak', () => {
							addFood(steak[7], '#steak', () => {
								const image = document.createElement('img')
								image.src = 'public/images/steak.jpg'
								document.querySelector('#table').appendChild(image)
							})
						})
					})
				})
			})
		})
	})
})

// Iteration 2 using `.then()`
addFood(mashPotatoes[0], '#mashPotatoes').then(() => {
	addFood(mashPotatoes[1], '#mashPotatoes').then(() => {
		addFood(mashPotatoes[2], '#mashPotatoes').then(() => {
			addFood(mashPotatoes[3], '#mashPotatoes').then(() => {
				addFood(mashPotatoes[4], '#mashPotatoes').then(() => {
					const image = document.createElement('img')
					image.src = 'public/images/mashPotatoes.jpg'
					document.querySelector('#table').appendChild(image)
				})
			})
		})
	})
})

// Iteration 3 using async and await
async function makeFood(step) {
	for (let i = 0; i < step.length; i += 1) {
		await addFood(step[i], '#brusselSprouts')
	}
	const image = document.createElement('img')
	image.src = 'public/images/brusselSprouts.jpg'
	document.querySelector('#table').appendChild(image)
}
makeFood(brusselSprouts)

//Bonus 2 using promise.all
function finishDinner(steps) {
	const brussels = steps.map((oneStep) => {
		for (let i = 0; i < brussels.lenght; i += 1) {
			return addFood(oneStep[i], '#brusselSprouts')
		}
	})
	const mash = steps.map((oneStep) => {
		return addFood(oneStep, '#mashPotatoes')
	})
	const steak = steps.map((oneStep) => {
		return addFood(oneStep, '#steak')
	})
	Promise.all(brussels, mash, steak).then((res) => {
		alert('Test!')
		console.log('hi')
	})
}

finishDinner(brusselSprouts, mashPotatoes, steak)
