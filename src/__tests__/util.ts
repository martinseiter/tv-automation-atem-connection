import { plainToClass } from 'class-transformer'
import { AtemState } from '..'
import { AtemAudioState } from '../state/audio'
import { AtemVideoState, MixEffect, SuperSource } from '../state/video'

function parseAudio (rawState: AtemAudioState) {
	const state = plainToClass(AtemAudioState, rawState)
	state.master = state.master
	state.channels = state.channels.map(ch => ch)

	return state
}

function parseVideo (rawState: AtemVideoState) {
	const state = plainToClass(AtemVideoState, rawState)
	state.ME = state.ME.map(me => plainToClass(MixEffect, me))
	state.superSources = state.superSources.map(ssrc => plainToClass(SuperSource, ssrc))
	return state
}

/** Note: This is incomplete, and should be filled in as needed */
export function parseAtemState (rawState: any): AtemState {
	const state = plainToClass(AtemState, rawState)
	state.audio = parseAudio(state.audio)
	state.video = parseVideo(state.video)

	return state
}