import { CleanDeleteEffects } from "./clean-delete";
import { CloseModalEffects } from "./close-modal";
import { SaveLocalEffects } from "./save-localStorage";
import { SaveUserEffects } from "./save-user";

export const EFFECTS = [
    CloseModalEffects,
    SaveUserEffects,
    CleanDeleteEffects,
    SaveLocalEffects
];