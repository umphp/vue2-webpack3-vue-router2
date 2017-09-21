import {
    SAVE_ARCHIVES
} from './mutation-types.js';

export default {
    // 保存ARCHIVE
    [SAVE_ARCHIVES] (state, archive) {
        if (Array.isArray(archive)) {
            state.archives.push(...archive);
        } else {
            state.archives.push(archive);
        }
    }
}
