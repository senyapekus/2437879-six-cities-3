import { CityType } from '../../../../types/city.type.js';
import { LivingPlaceType } from '../../../../types/living-place.type.js';
import { OptionsType } from '../../../../types/options.type.js';
import { User } from '../../../../types/user.type.js';
import {
  IsArray,
  IsBoolean,
  IsDateString,
  IsInt,
  IsMongoId,
  IsNumber,
  IsOptional,
  IsString,
  MaxLength,
  MinLength
} from 'class-validator';
import { CreateOfferValidationMessage } from './create-offer-messages.dto.js';

export default class UpdateOfferDto {
  @IsOptional()
  @MinLength(10, {message: CreateOfferValidationMessage.name.minLength})
  @MaxLength(100, {message: CreateOfferValidationMessage.name.maxLength})
    name?: string;

  @IsOptional()
  @MinLength(20, {message: CreateOfferValidationMessage.name.minLength})
  @MaxLength(1024, {message: CreateOfferValidationMessage.name.maxLength})
    description?: string;

  @IsOptional()
  @IsDateString({}, {message: CreateOfferValidationMessage.createdDate.invalidFormat})
    createdDate?: Date;

  @IsOptional()
  @IsString({message: CreateOfferValidationMessage.city.invalidFormat})
    city?: CityType;

  @IsOptional()
  @IsString({message: CreateOfferValidationMessage.previewImg.invalidFormat})
    previewImg?: string;

  @IsOptional()
  @IsArray({message: CreateOfferValidationMessage.images.invalidFormat})
    images?: string[];

  @IsOptional()
  @IsBoolean({message: CreateOfferValidationMessage.isPremium.invalidFormat})
    isPremium!: boolean;

  @IsOptional()
  @IsBoolean({message: CreateOfferValidationMessage.isFavourites.invalidFormat})
    isFavourites?: boolean;

  @IsOptional()
  @IsNumber({}, {message: CreateOfferValidationMessage.rating.invalidFormat})
    rating?: 1 | 1.1 | 1.2 | 1.3 | 1.4 | 1.5 | 1.6 | 1.7 | 1.8 | 1.9 |
    2 | 2.1 | 2.2 | 2.3 | 2.4 | 2.5 | 2.6 | 2.7 | 2.8 | 2.9 |
    3 | 3.1 | 3.2 | 3.3 | 3.4 | 3.5 | 3.6 | 3.7 | 3.8 | 3.9 |
    4 | 4.1 | 4.2 | 4.3 | 4.4 | 4.5 | 4.6 | 4.7 | 4.8 | 4.9 |
    5;

  @IsOptional()
  @IsString({message: CreateOfferValidationMessage.livingPlace.invalidFormat})
    livingPlace?: LivingPlaceType;

  @IsOptional()
  @IsInt({message: CreateOfferValidationMessage.roomsCount.invalidFormat})
    roomsCount?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

  @IsOptional()
  @IsInt({message: CreateOfferValidationMessage.peopleCount.invalidFormat})
    peopleCount?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

  @IsOptional()
  @IsNumber({}, {message: CreateOfferValidationMessage.price.invalidFormat})
    price?: number;

  @IsOptional()
  @IsString({message: CreateOfferValidationMessage.options.invalidFormat})
    options?: OptionsType;

  @IsOptional()
  @IsMongoId({message: CreateOfferValidationMessage.author.invalidId})
    author?: User;

  @IsOptional()
    commentsCount?: number;

  @IsOptional()
  @IsArray({message:CreateOfferValidationMessage.coordinates.invalidFormat})
    coordinates?: number[];
}
